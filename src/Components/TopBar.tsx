import logo from "../assets/logo.png"

const TopBar = () => {
    return(
        <div className="h-20 text-white bg-zinc-700">
            <img className="h-full w-[250px]" src={logo} alt="" />
        </div>
    )
}

export default TopBar