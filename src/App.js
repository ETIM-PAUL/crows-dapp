import { ethers } from "ethers";
import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useCampaign from "./hooks/useCampaigns";
import { formatDate, shortenAccount } from "./utils";

function App() {
    const campaignCount = useCampaign()
    return (
        <div className="">
            <Header />

            <main className="pt-10 App bg-gray-500 min-h-screen">
                <CreateCampaign />
                {campaignCount.length === 0 &&
                    <span className="font-bold text-center block w-full text-3xl text-white mt-3">No Campaigns Yet</span>}
                <div className="flex flex-wrap justify-center gap-10 px-20 py-10 w-ful">
                    {!!campaignCount && campaignCount.map((campaign, index) =>
                    (
                        <div key={index} className="bg-white w-full sm:max-w-sm shadow-md rounded-xl overflow-hidden py-8">
                            <div className="px-6 py-4">
                                <h2 className="text-2xl text-black font-semibold text-gray-800">{campaign.title.replace(/"/g, '')} </h2>
                                <p className="mt-2 font-bold text-gray-600">Duration - {formatDate(ethers.formatUnits(campaign?.durationTime, 0))}</p>
                                <p className="mt-2 font-bold text-gray-600">Balance - {ethers.formatUnits(campaign?.fundingBalance, 0)}ETH</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-blue-200 text-blue-800 text-sm px-4 py-2 rounded-full">{ethers.formatUnits(campaign.fundingGoal, 0)}ETH</span>
                                <span className={`${campaign.isActive ? "bg-green-200 text-green-800" : "bg-gray-400 text-white"} inline-block text-sm px-4 py-2 rounded-full ml-2`}>{campaign.isActive ? "Active" : "Inactive"}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
}

export default App;
