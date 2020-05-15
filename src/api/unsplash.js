import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zqM2RpXCSeNISs3ARzEuzMh9ku4IhBteMxjJw6PjnpQ",
  },
});
