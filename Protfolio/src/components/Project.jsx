const Project = () => {
    const openLink = (url) => {
        window
            .open(url, "_blank");
    }
    
    return (

        <section className="p-4">
            <h2 className="text-3xl m-5">My Projects</h2>
            <div className="flex flex-wrap justify-evenly ">
                <div className="border rounded-lg p-5 m-4 cursor-pointer hover:bg-[#E5E0CA]" onClick={() => openLink("https://github.com/JuliusCaesarII/FS-web/tree/main/Aizen%20fan%20page")}>
                    <h3 className="text-xl"> Aizen fan page </h3>
                    <p> this is an Aizen fan page </p>
                    <img alt="placeholder" />
                </div>
                <div className="border rounded-lg p-5 m-4 cursor-pointer hover:bg-[#E5E0CA]" onClick={() => openLink("https://Google.com")}>
                    <h3 className="text-xl">Project </h3>
                    <p>Project description</p>
                    <img alt="placeholder" />
                </div><div className="border rounded-lg p-5 m-4 cursor-pointer hover:bg-[#E5E0CA]" onClick={() => openLink("https://Google.com")}>
                    <h3 className="text-xl">Project </h3>
                    <p>Project description</p>
                    <img alt="placeholder" />
                </div><div className="border rounded-lg p-5 m-4 cursor-pointer hover:bg-[#E5E0CA]" onClick={() => openLink("https://Google.com")}>
                    <h3 className="text-xl">Project </h3>
                    <p>Project description</p>
                    <img alt="placeholder" />
                </div><div className="border rounded-lg p-5 m-4 cursor-pointer hover:bg-[#E5E0CA]" onClick={() => openLink("https://Google.com")}>
                    <h3 className="text-xl">Project </h3>
                    <p>Project description</p>
                    <img alt="placeholder" />
                </div>
            </div>
        </section>
    )
}

export default Project;