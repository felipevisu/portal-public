import EntryList from "@/components/EntryList";

interface PageProps {
  params: { channel: string; type: string };
}

export const Page = ({ params }: PageProps) => {
  return <EntryList />;
};

export default Page;
