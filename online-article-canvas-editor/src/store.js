// import { create } from 'zustand';
// import update from 'immutability-helper';

// import TextBlock from './components/TextBlock';
// import MediaBlock from './components/MediaBlock';
// import OneColumn from './components/OneColumn';
// import TwoColumn from './components/TwoColumn';
// import Divider from './components/Divider';

// const componentMap = {
//   TextBlock,
//   MediaBlock,
//   OneColumn,
//   TwoColumn,
//   Divider,
// };

// const LOCAL_STORAGE_KEY = 'canvasDraft';

// const useStore = create((set) => ({
//   components: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],

//   addComponent: (item) =>
//     set((state) => {
//       const updated = [
//         ...state.components,
//         {
//           type: componentMap[item.type],
//           props: {},
//         },
//       ];
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
//       return { components: updated };
//     }),

//   clearComponents: () => {
//     localStorage.removeItem(LOCAL_STORAGE_KEY);
//     set({ components: [] });
//   },

//   moveComponent: (dragIndex, hoverIndex) =>
//     set((state) => {
//       const reordered = update(state.components, {
//         $splice: [
//           [dragIndex, 1],
//           [hoverIndex, 0, state.components[dragIndex]],
//         ],
//       });
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reordered));
//       return { components: reordered };
//     }),
// }));

// export default useStore;


import { create } from 'zustand';
import update from 'immutability-helper';

import TextBlock from './components/TextBlock';
import MediaBlock from './components/MediaBlock';
import OneColumn from './components/OneColumn';
import TwoColumn from './components/TwoColumn';
import Divider from './components/Divider';

import ImageBlock from './components/ImageBlock';
import VideoBlock from './components/VideoBlock';

const componentMap = {
  TextBlock,
  ImageBlock,
  VideoBlock,
  OneColumn,
  TwoColumn,
  Divider,
};

const LOCAL_STORAGE_KEY = 'canvasDraft';

const useStore = create((set) => ({
  components: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],

  addComponent: (item) =>
    set((state) => {
      const updated = [
        ...state.components,
        {
          type: componentMap[item.type], // ✅ Must use actual component, not string
          props: {},
        },
      ];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      return { components: updated };
    }),

  clearComponents: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    set({ components: [] });
  },

  moveComponent: (dragIndex, hoverIndex) =>
    set((state) => {
      const reordered = update(state.components, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, state.components[dragIndex]],
        ],
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reordered));
      return { components: reordered };
    }),
}));

export default useStore;

