import {useState} from "react";

const Options = ({data}) => {
    const [options] = useState(data)
    return (
        <div className="flex col mt-32">
            {options.map((option, i) =>
                option.desc &&
                <div key={i} className="flex col mt-16">
                    <p className="gray fs-14">{option.title}</p>
                    <p className="regular black">{option.desc}</p>
                </div>
            )}
        </div>
    )
}
export default Options