import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";

const Page = () => {
    return (
        <section>
            <h1 className='text-center'>
                The Ultimate Platform <br/>
                for Every Dev Event
            </h1>
            <p className='text-center mt-5'>
                Discover, Host & Manage Hackathons, Meetups, and Conferences — All in One Place
            </p>
            <ExploreBtn/>
        </section>
    )
}

export default Page;
