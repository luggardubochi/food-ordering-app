import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    food ordering is necessary, your body requires healthy food to function, so please,
                    come around and get the best meal for your family at a quick delivery speed and you 
                    and your family will enjoy the beauty of good food at comfort, we are avaliable at 
                    all through the week your comfort is our pleasure. You could reach us at  +234810411986, 
                    and at luggardubochi@gmail.com
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}