import * as React from "react";
import { Plugin } from "obsidian";
import * as ReactDOMClient from "react-dom/client";
import { ReactView } from "./ReactView";

export default class GridPlugin extends Plugin {
	private root: ReactDOMClient.Root | null = null;

	async onload() {
		this.registerMarkdownCodeBlockProcessor("grid-block", (source, el) => {
			this.root = ReactDOMClient.createRoot(el);
			this.root.render(
				React.createElement(ReactView, { content: source })
			); // 修正ポイント
		});
	}

	onunload() {
		if (this.root) {
			this.root.unmount();
		}
	}
}
