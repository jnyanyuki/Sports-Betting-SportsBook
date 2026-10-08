export default function socket(io: any) {
  io.on("connection", (socket: any) => {
    console.log("Socket client connected:", socket.id);
  });
}
