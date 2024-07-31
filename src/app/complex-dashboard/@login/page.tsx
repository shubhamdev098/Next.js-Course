import Card from "@/components/Card";

export default function Login({
    isLoggedIn
}: {
    isLoggedIn: boolean;
}) {
    console.log(isLoggedIn);
    return (
        <Card>
            Login kaar chup chaap nhitoh kaat lee ya see
        </Card>
    );
}