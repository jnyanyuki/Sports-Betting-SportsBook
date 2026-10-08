import mongoose, { Schema } from 'mongoose';

const schemaOpts = { strict: false, timestamps: true };

const UserSchema = new Schema({ username: String, email: String, avatar: String }, schemaOpts);
const SessionSchema = new Schema({ userId: String }, schemaOpts);
const PermissionSchema = new Schema({}, schemaOpts);
const BalanceSchema = new Schema({}, schemaOpts);
const CurrencySchema = new Schema({}, schemaOpts);
const LoginHistorySchema = new Schema({}, schemaOpts);
const BalanceHistorySchema = new Schema({}, schemaOpts);
const GameSchema = new Schema({}, schemaOpts);
const SportsBetSchema = new Schema({}, schemaOpts);

export const Users = mongoose.models.Users || mongoose.model('Users', UserSchema);
export const Sessions = mongoose.models.Sessions || mongoose.model('Sessions', SessionSchema);
export const Permissions = mongoose.models.Permissions || mongoose.model('Permissions', PermissionSchema);
export const Balances = mongoose.models.Balances || mongoose.model('Balances', BalanceSchema);
export const Currencies = mongoose.models.Currencies || mongoose.model('Currencies', CurrencySchema);
export const LoginHistories = mongoose.models.LoginHistories || mongoose.model('LoginHistories', LoginHistorySchema);
export const BalanceHistories = mongoose.models.BalanceHistories || mongoose.model('BalanceHistories', BalanceHistorySchema);
export const Games = mongoose.models.Games || mongoose.model('Games', GameSchema);
export const SportsBets = mongoose.models.SportsBets || mongoose.model('SportsBets', SportsBetSchema);
