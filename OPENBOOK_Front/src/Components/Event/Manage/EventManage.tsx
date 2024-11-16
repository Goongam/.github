import { useSearchParams } from "react-router-dom";
import ManageMenu from "./ManageMenu";
import EventAproval from "../../Admin/EventAproval";

const MENU_CONTENT_MAP: {
  [key: string]: {
    title: string;
    content: React.ReactNode;
    index: number;
  };
} = {
  aprove: {
    title: "행사 관리",
    content: <EventAproval />,
    index: 0,
  },
};

export default function EventManage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") ?? "aprove";
  const content = MENU_CONTENT_MAP[type];

  return (
    <section
      className="flex min-h-screen justify-center my-10"
      onSubmit={() => {}}
    >
      <div className="w-full max-w-screen-lg border h-full p-10">
        <div className="flex items-center gap-20 border-b p-7">
          <h2 className="font-extrabold text-4xl">{content.title}</h2>
        </div>
        <div className="flex">{content.content}</div>
      </div>

      {/* <ManageMenu clickedMenuIndex={content.index} /> */}
    </section>
  );
}
