import Link from "next/link";

export default function F1() {
    return (
        <div>
            F1 Page
            <div>
                <Link href="/f1/f2">
                    F2
                </Link>
            </div>
        </div>
    );
}