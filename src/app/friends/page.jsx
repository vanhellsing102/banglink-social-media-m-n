"use client";
import Friends from '@/components/Friends/Friends';
import Suggestion from '@/components/Friends/Suggestion';
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const page = () => {
    const [activeTab, setActiveTab] = useState("suggestions");
    // console.log(activeTab);
    return (
        <div>
            <Tabs>
                <TabList className={"flex items-center justify-between gap-4"}>
                    <Tab onClick={() =>setActiveTab("suggestions")} className={`rounded-lg px-2 py-1 hover:bg-blue-200 cursor-pointer ${activeTab == "suggestions" ? "bg-blue-300" : "bg-slate-100"}`}>
                        Suggestions
                    </Tab>
                    <Tab onClick={() =>setActiveTab("friends")} className={`rounded-lg px-2 py-1 hover:bg-blue-200 cursor-pointer ${activeTab == "friends" ? "bg-blue-300" : "bg-slate-100"}`}>
                        Your Friends
                    </Tab>
                </TabList>
                <div className='mt-5'>
                    <TabPanel>
                        <Suggestion></Suggestion>
                    </TabPanel>
                    <TabPanel>
                        <Friends></Friends>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default page;