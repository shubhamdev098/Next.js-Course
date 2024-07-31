import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
            <div>ArchivedNotifications</div>
            <Link href="/complex-dashboard">
                Default
            </Link>
        </Card>
    );
}