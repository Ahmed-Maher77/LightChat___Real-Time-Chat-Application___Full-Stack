import assets from "../../assets/assets";

const NotFoundBrand = () => {
    return (
        <header className="mx-auto mb-6 flex w-fit items-center gap-3 px-4 py-2">
            <img src={assets.main_logo} alt="LightChat logo" className="h-7 w-7" />
            <span className="text-lg font-medium text-stone-200">LightChat</span>
        </header>
    );
};

export default NotFoundBrand;