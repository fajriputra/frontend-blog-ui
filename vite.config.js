import { defineConfig } from 'vite';
import PluginReactSWC from '@vitejs/plugin-react-swc';
import { antdDayjs } from 'antd-dayjs-vite-plugin';
import PluginJSConfigPath from 'vite-jsconfig-paths';
import PluginDyanmicImport from 'vite-plugin-dynamic-import';
import svgr from 'vite-plugin-svgr'; // transform svg to react component

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			sass: {
				javascriptEnabled: true,
			},
		},
	},
	plugins: [PluginReactSWC(), antdDayjs(), PluginJSConfigPath(), PluginDyanmicImport(), svgr()],
});
