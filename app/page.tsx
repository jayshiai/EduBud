import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">EduBud 🦜</h1>
      <ul>
        <li className="hidden text-l md:block">
          🤝
          <span className="ml-2">
            “EduBud” is a semi-autonomous AI agent designed to revolutionize the
            educational landscape
          </span>
        </li>
        <li className="hidden text-l md:block">
          🛠️
          <span className="ml-2">
            The agent has access to a vector store retriever as a tool as well
            as a memory. It&apos;s particularly well suited to meta-questions
            about the current conversation.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            This innovative tool serves as a dynamic learning companion.
          </span>
        </li>
        <li>
          🤖
          <span className="ml-2">
            By default, the agent is pretending to be a robot, but you can
            change the prompt to whatever you want in the source code!
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            By leveraging the power of LLMs, EduBud can comprehend complex
            linguistic patterns and provide responses that are contextually
            appropriate.
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            This template is open source - you can see the source code and
            deploy your own version{" "}
            <a href="https://github.com/jayshiai/EduBud" target="_blank">
              from the GitHub repo
            </a>
            !
          </span>
        </li>
        <li className="hidden text-l md:block">
          🔱
          <span className="ml-2">
            Before running this example, you&apos;ll first need to set up a
            Supabase (or other) vector store. See the README for more details.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Upload some text, then try asking e.g.{" "}
            <code>Who won the 14th Oct 2023 ICC World Cup Match?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Beep boop! I\'m a robot retrieval-focused agent! Ask, "Who won the 14th Oct 2023 ICC World Cup Match?"'
      }
      emoji="🤖"
      titleText="Robbie the Retrieval Robot"
    ></ChatWindow>
  );
}
