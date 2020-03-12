let httpEndpoint = "";

if (process.env.NODE_ENV === "production") {
  httpEndpoint = "https://salesmetriks-apollo-server.herokuapp.com/";
} else if (process.env.NODE_ENV === "development") {
  httpEndpoint = "http://localhost:4000/";
}

export default {
  clientConfigs: {
    default: {
      httpEndpoint
    }
  }
};
