import { useId } from 'react';

export default function Demo() {
    const tab1 = "images/tab1.png";
    const tab2 = "images/tab2.png";
    const tab3 = "images/tab3.png";
    const tab4 = "images/tab4.png";

    const passwordHintId = useId();

    const Image = () => {
        return <img src="images/tab1.png" id={passwordHintId} alt="" />
    }

    return (
        <>


            <label>
                1st function
                <input
                    type="number"
                    aria-describedby={passwordHintId}
                />
            </label>
            <p >
            <Image />
            </p>

            <label>
                2ndst function
                <input
                   
                    type="number"
                    aria-describedby={passwordHintId}
                />
            </label>
            <p >
            <Image />
            </p>

        </>
    );

}

