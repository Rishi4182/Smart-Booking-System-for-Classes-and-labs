let io;

const initSocket = (server) => {
  const { Server } = require("socket.io");

  io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173",
         "https://smart-booking-system-for-classes-and-labs-l2imw1r7n-trying13.vercel.app"
      ],
      credentials: true
    }
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
};

module.exports = { initSocket, getIO };
