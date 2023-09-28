import AllCampaigns from "./component/AllCampaigns";
import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useAllCampaigns from "./hooks/useAllCampaigns";

function App() {
    const campaigns = useAllCampaigns();
    return (
        <div className="">
            <Header />

            <main className="pt-10 App bg-gray-500 min-h-screen">
                <CreateCampaign />
                <AllCampaigns />
            </main>

        </div>
    );
}

export default App;
