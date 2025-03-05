import { WebPubSubClient } from "@azure/web-pubsub-client";
import { useEffect } from "react";
import { Link, Outlet } from "react-router";
import { getToken, getWsTokenUrl } from "../service/api";

function Layout() {
  useEffect(() => {
    console.log("rendered at " + new Date().toISOString());
    const client = new WebPubSubClient({
      getClientAccessUrl: async () => {
        const token = await getToken();
        return await getWsTokenUrl(token);
      },
    });
    async function connect(client: WebPubSubClient) {
      client.on("connected", () => {
        console.log("connected");
      });
      client.on("server-message", (message) => {
        console.log("Server message: " + JSON.stringify(message));
      });

      client.on("group-message", (message) => {
        console.log("Group message: " + JSON.stringify(message));
      });

      client.on("disconnected", () => {
        console.log("disconnected");
      });

      await client.start();
      await client.joinGroup("demo");

      return client;
    }
    connect(client);

    return () => {
      console.log("cleanup");
      client.leaveGroup("demo");
      client.stop();
    };
  }, []);

  return (
    <div>
      <header>
        <nav className="z-50 bg-white">
          <div className="h-10vh flex justify-between gap-10 px-6 py-3 border-b-1 border-gray-200">
            <div className="flex items-center flex-1">
              <h2 className="text-xl font-bold">Demo</h2>
            </div>
            <div>
              <ul className="flex gap-8 text-black mr-16 text-[18px]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
