import axios from "axios";

const Proxy = () => {
  axios.get("https://api.proxyscrape.com/v4/free-proxy-list/get?request=display_proxies&proxy_format=ipport&format=text")
  .then((response)=>console.log(response.data))
  .catch((error) => console.error("Error:", error))
  return (
    <div>
      <h1>Look to console</h1>
    </div>
  );
};

export default Proxy;
