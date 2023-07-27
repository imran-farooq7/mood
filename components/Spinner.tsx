import { BarLoader } from "react-spinners";

const Spinner = ({ loading }: { loading: boolean }) => {
	return <BarLoader loading={loading} height={20} width={100} color="pink" />;
};
export default Spinner;
