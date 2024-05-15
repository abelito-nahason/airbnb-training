type HeaderProps = {
    title:string;
    selected?:boolean;
}

const Header = ({title, selected}:HeaderProps) => {

    return (
        <div className="flex flex-col items-center gap-1">
            <p className={`text-white ${selected && 'font-bold'}`}>{title}</p>
            { selected && <div className="w-9 h-1 rounded-2xl bg-white"/>}
        </div>
    )

}

export default Header