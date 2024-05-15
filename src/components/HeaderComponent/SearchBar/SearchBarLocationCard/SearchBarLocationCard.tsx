

type LocationCardProps = {
    src:string;
    title: string;
}

const LocationCard = ({src, title}:LocationCardProps) => {

    return (
        <div className="hover:bg-gray-200 rounded-2xl px-2 py-2">
            <img className="rounded-2xl outline-gray-200 outline outline-1 w-[110px] h-[110px] active:scale-90 transition ease-in duration-100" src={src} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default LocationCard