const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || "mongodb+srv://rajankumaritmsit:ogs1ZG2QoUu6TAiq@cluster0.xpkvlsm.mongodb.net/?retryWrites=true&w=majority"
}

export default config
