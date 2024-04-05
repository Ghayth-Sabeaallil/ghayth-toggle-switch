import "./ToggleSwitch.scss"

type ToogleSwitchProps = {
    handleClick: React.MouseEventHandler<HTMLInputElement>;
};

const ToogleSwitch = ({ handleClick }: ToogleSwitchProps) => {

    return (
        <>

            <label className="switch">
                <input onClick={handleClick} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default ToogleSwitch