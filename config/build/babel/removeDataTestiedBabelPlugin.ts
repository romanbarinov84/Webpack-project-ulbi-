import { PluginItem } from "@babel/core";

function removeDataTestidBabelPlugin(): PluginItem {
  return {
    visitor: {
      JSXOpeningElement(path, state) {
        const forbiddenProps: string[] = state.opts.props || ["data-testid"];

        // Фильтруем атрибуты, убирая запрещённые
        path.node.attributes = path.node.attributes.filter(attr => {
          return !(
            attr.type === "JSXAttribute" &&
            forbiddenProps.includes(attr.name.name as string)
          );
        });
      },
    },
  };
}

export default removeDataTestidBabelPlugin;
