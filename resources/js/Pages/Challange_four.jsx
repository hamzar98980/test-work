
export default function Challange_four(props) {
    const { companydata } = props;
    const { insurancecompany } = props;
    console.log(props);
    return (
        <>
            <h4>Given Data : {JSON.stringify(insurancecompany)}</h4>
            <h4>Result Data : {JSON.stringify(companydata)}</h4>
        </>
    );
}
