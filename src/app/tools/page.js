import ModelCard from "../components/ModelCard";

const Tools = () => {
  const models = [
    {
      title: "Image-to-Text",
      models: ["@cf/llava-hf/llava-1.5-7b-hf", "@cf/unum/uform-gen2-qwen-500m"],
    },
    {
      title: "Text Generation",
      models: [
        "@hf/thebloke/deepseek-coder-6.7b-base-awq",
        "@cf/qwen/qwen1.5-14b-chat-awq",
      ],
    },
    {
      title: "Text-to-Image",
      models: [
        "@cf/lykon/dreamshaper-8-lcm",
        "@cf/black-forest-labs/flux-1-schnell",
      ],
    },
  ];

  return (
    <div>
      <main>
        <h1>AI 工具</h1>
        {models.map((category) => (
          <div className="modelContainer" key={category.title}>
            <h2>{category.title}</h2>
            {category.models.map((model) => (
              <ModelCard key={model} model={model} />
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Tools;
