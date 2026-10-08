import "dotenv/config";
import axios from "axios";
import mongoose from "mongoose";

async function testEnv() {
    console.log("===============================================");
    console.log("        ENVIRONMENT PARAMETER TEST AUDIT       ");
    console.log("===============================================\n");

    const results: any[] = [];

    // 1. Database connection
    try {
        await mongoose.connect(process.env.DATABASE as string, { serverSelectionTimeoutMS: 3000 });
        results.push({ Parameter: "DATABASE", Status: "PASS", Details: "MongoDB connection successful" });
        await mongoose.disconnect();
    } catch (err: any) {
        results.push({ Parameter: "DATABASE", Status: "FAIL / OFFLINE", Details: `MongoDB error: ${err.message}` });
    }

    // 2. CoinGecko API
    try {
        const url = `${process.env.GET_PRICE_URL}?ids=bitcoin&vs_currencies=usd`;
        const res = await axios.get(url, { timeout: 5000 });
        if (res.data && res.data.bitcoin) {
            results.push({ Parameter: "GET_PRICE_URL", Status: "PASS", Details: `CoinGecko API active (BTC: $${res.data.bitcoin.usd})` });
        } else {
            results.push({ Parameter: "GET_PRICE_URL", Status: "WARN", Details: `API responded but payload unexpected: ${JSON.stringify(res.data)}` });
        }
    } catch (err: any) {
        results.push({ Parameter: "GET_PRICE_URL", Status: "FAIL", Details: `CoinGecko API error: ${err.message}` });
    }

    // 3. Web3 Infura RPC
    const infuraUrl = process.env.WEB3_URL || process.env.E_WEB3_URL;
    try {
        const res = await axios.post(infuraUrl as string, {
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1
        }, { timeout: 5000 });
        if (res.data && res.data.result) {
            results.push({ Parameter: "WEB3_URL / E_WEB3_URL", Status: "PASS", Details: `Infura RPC active (Latest Block: ${parseInt(res.data.result, 16)})` });
        } else if (res.data && res.data.error) {
            results.push({ Parameter: "WEB3_URL / E_WEB3_URL", Status: "FAIL (INVALID KEY)", Details: `Infura Error: ${res.data.error.message}` });
        } else {
            results.push({ Parameter: "WEB3_URL / E_WEB3_URL", Status: "WARN", Details: `Infura response: ${JSON.stringify(res.data)}` });
        }
    } catch (err: any) {
        results.push({ Parameter: "WEB3_URL / E_WEB3_URL", Status: "FAIL", Details: `Infura HTTP error: ${err.message}` });
    }

    // 4. B365 Sportsbook API
    const b365Key = process.env.SPORTSBOOK_APIKEY;
    if (!b365Key) {
        results.push({ Parameter: "SPORTSBOOK_APIKEY", Status: "MISSING", Details: "Key is empty in .env" });
    }
    try {
        const res = await axios.get(`${process.env.LIVE_ENDPOINT}?token=${b365Key || 'dummy'}`, { timeout: 5000 });
        if (res.data && res.data.success === 1) {
            results.push({ Parameter: "B365 ENDPOINTS", Status: "PASS", Details: "b365api token verified valid" });
        } else if (res.data && res.data.error) {
            results.push({ Parameter: "B365 ENDPOINTS", Status: "FAIL (KEY REQUIRED)", Details: `b365api response: ${res.data.error}` });
        } else {
            results.push({ Parameter: "B365 ENDPOINTS", Status: "WARN", Details: `b365api response: ${JSON.stringify(res.data)}` });
        }
    } catch (err: any) {
        results.push({ Parameter: "B365 ENDPOINTS", Status: "FAIL", Details: `b365api HTTP error: ${err.message}` });
    }

    // 5. Payment Gateway IPN credentials
    if (!process.env.MERCHANT_ID || !process.env.PUBLIC_KEY || !process.env.PRIVATE_KEY) {
        results.push({ Parameter: "PAYMENT GATEWAY (IPN)", Status: "EMPTY / UNCONFIGURED", Details: "MERCHANT_ID / PUBLIC_KEY / PRIVATE_KEY are blank" });
    } else {
        results.push({ Parameter: "PAYMENT GATEWAY (IPN)", Status: "CONFIGURED", Details: "Credentials present" });
    }

    // 6. SMTP Email Credentials
    if (!process.env.HOST || !process.env.USER || !process.env.PASS) {
        results.push({ Parameter: "SMTP EMAIL (HOST/USER/PASS)", Status: "EMPTY / UNCONFIGURED", Details: "SMTP credentials are blank" });
    } else {
        results.push({ Parameter: "SMTP EMAIL", Status: "CONFIGURED", Details: "Host/User/Pass specified" });
    }

    // 7. Recaptcha
    if (!process.env.RECAPTCHA_SECRET_KEY) {
        results.push({ Parameter: "RECAPTCHA", Status: "DISABLED (BYPASSED)", Details: "RECAPTCHA_SKIP_ENABLED=true" });
    }

    // 8. Crypto Hot Wallets
    results.push({
        Parameter: "ETHEREUM HOT WALLET",
        Status: process.env.E_D_PUBLIC_ADDRESS ? "ADDRESS CONFIGURED" : "EMPTY",
        Details: `Public Address: ${process.env.E_D_PUBLIC_ADDRESS || 'None'} | Private Key: ${process.env.E_W_PRIVATE_ADDRESS ? 'Set' : 'Missing (Withdrawals disabled)'}`
    });

    results.push({
        Parameter: "SOLANA HOT WALLET",
        Status: process.env.S_W_PRIVATE_ADDRESS ? "CONFIGURED" : "MISSING PRIVATE KEY",
        Details: `Private Key: ${process.env.S_W_PRIVATE_ADDRESS ? 'Set' : 'Missing (Solana payouts disabled)'}`
    });

    console.table(results);
}

testEnv().catch(console.error);
