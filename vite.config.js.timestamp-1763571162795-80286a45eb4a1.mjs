// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import path from "path";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@/gsap": path.resolve(process.cwd(), "src/js/gsap.ts"),
      "@/scroll": path.resolve(process.cwd(), "src/js/scroll.ts"),
      "@/app": path.resolve(process.cwd(), "src/js/app.js"),
      "@/gl/Gl": path.resolve(process.cwd(), "src/js/gl/Gl.js"),
      "@/gl": path.resolve(process.cwd(), "src/js/gl"),
      "@/modules": path.resolve(process.cwd(), "src/js/modules"),
      "@/utils/subscribable": path.resolve(process.cwd(), "src/js/utils/subscribable.ts"),
      "@/utils/environment": path.resolve(process.cwd(), "src/js/utils/environment.ts"),
      "@/utils/client-rect": path.resolve(process.cwd(), "src/js/utils/client-rect.ts"),
      "@/utils": path.resolve(process.cwd(), "src/js/utils"),
      "@/transitions": path.resolve(process.cwd(), "src/js/transitions"),
      "@": path.resolve(process.cwd(), "src")
    }
  },
  assetsInclude: [
    "**/*.glb",
    "**/*.gltf",
    "**/*.hdr",
    "**/*.exr",
    "**/*.mp3",
    "**/*.wav",
    "**/*.ogg",
    "**/*.woff2",
    "**/*.woff"
  ],
  server: {
    host: true,
    port: 3e3,
    open: true
  },
  build: {
    target: "es2022",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), "index.html")
      },
      output: {
        manualChunks: {
          "three": ["three"],
          "gsap": ["gsap"],
          "vendor": ["lenis", "@unseenco/taxi", "TagCloud"]
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      "three",
      "three/examples/jsm/loaders/GLTFLoader.js",
      "three/examples/jsm/loaders/DRACOLoader.js",
      "three/examples/jsm/loaders/RGBELoader.js",
      "three/examples/jsm/controls/OrbitControls.js",
      "gsap",
      "lenis",
      "@unseenco/taxi"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQC9nc2FwJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvZ3NhcC50cycpLFxuICAgICAgJ0Avc2Nyb2xsJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvc2Nyb2xsLnRzJyksXG4gICAgICAnQC9hcHAnOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9qcy9hcHAuanMnKSxcbiAgICAgICdAL2dsL0dsJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvZ2wvR2wuanMnKSxcbiAgICAgICdAL2dsJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvZ2wnKSxcbiAgICAgICdAL21vZHVsZXMnOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9qcy9tb2R1bGVzJyksXG4gICAgICAnQC91dGlscy9zdWJzY3JpYmFibGUnOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9qcy91dGlscy9zdWJzY3JpYmFibGUudHMnKSxcbiAgICAgICdAL3V0aWxzL2Vudmlyb25tZW50JzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvdXRpbHMvZW52aXJvbm1lbnQudHMnKSxcbiAgICAgICdAL3V0aWxzL2NsaWVudC1yZWN0JzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvdXRpbHMvY2xpZW50LXJlY3QudHMnKSxcbiAgICAgICdAL3V0aWxzJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvdXRpbHMnKSxcbiAgICAgICdAL3RyYW5zaXRpb25zJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvanMvdHJhbnNpdGlvbnMnKSxcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMnKVxuICAgIH1cbiAgfSxcbiAgYXNzZXRzSW5jbHVkZTogW1xuICAgICcqKi8qLmdsYicsXG4gICAgJyoqLyouZ2x0ZicsXG4gICAgJyoqLyouaGRyJyxcbiAgICAnKiovKi5leHInLFxuICAgICcqKi8qLm1wMycsXG4gICAgJyoqLyoud2F2JyxcbiAgICAnKiovKi5vZ2cnLFxuICAgICcqKi8qLndvZmYyJyxcbiAgICAnKiovKi53b2ZmJ1xuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLFxuICAgIHBvcnQ6IDMwMDAsXG4gICAgb3BlbjogdHJ1ZVxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzMjAyMicsXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdpbmRleC5odG1sJylcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ3RocmVlJzogWyd0aHJlZSddLFxuICAgICAgICAgICdnc2FwJzogWydnc2FwJ10sXG4gICAgICAgICAgJ3ZlbmRvcic6IFsnbGVuaXMnLCAnQHVuc2VlbmNvL3RheGknLCAnVGFnQ2xvdWQnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAndGhyZWUnLFxuICAgICAgJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnLFxuICAgICAgJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0RSQUNPTG9hZGVyLmpzJyxcbiAgICAgICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9SR0JFTG9hZGVyLmpzJyxcbiAgICAgICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcycsXG4gICAgICAnZ3NhcCcsXG4gICAgICAnbGVuaXMnLFxuICAgICAgJ0B1bnNlZW5jby90YXhpJ1xuICAgIF1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFVBQVUsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGdCQUFnQjtBQUFBLE1BQ3RELFlBQVksS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQjtBQUFBLE1BQzFELFNBQVMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGVBQWU7QUFBQSxNQUNwRCxXQUFXLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxpQkFBaUI7QUFBQSxNQUN4RCxRQUFRLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxXQUFXO0FBQUEsTUFDL0MsYUFBYSxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCO0FBQUEsTUFDekQsd0JBQXdCLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyw4QkFBOEI7QUFBQSxNQUNsRix1QkFBdUIsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLDZCQUE2QjtBQUFBLE1BQ2hGLHVCQUF1QixLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsNkJBQTZCO0FBQUEsTUFDaEYsV0FBVyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsY0FBYztBQUFBLE1BQ3JELGlCQUFpQixLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsb0JBQW9CO0FBQUEsTUFDakUsS0FBSyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxZQUFZO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFNBQVMsQ0FBQyxPQUFPO0FBQUEsVUFDakIsUUFBUSxDQUFDLE1BQU07QUFBQSxVQUNmLFVBQVUsQ0FBQyxTQUFTLGtCQUFrQixVQUFVO0FBQUEsUUFDbEQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
