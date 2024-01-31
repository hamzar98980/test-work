
export default function Challange(props) {
    // console.log(props);
    const { testarray } = props;
    const { doublenumarray } = props;
    return (
        <>
            <h3> Given Array = {JSON.stringify(testarray)}</h3>
            <h3>Repeated Numbers Array = {JSON.stringify(doublenumarray)}</h3>
        </>
    );
}
