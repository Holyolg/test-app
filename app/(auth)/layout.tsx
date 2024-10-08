import { Providers } from "@/components/providers";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Providers>{children}</Providers>;
}
