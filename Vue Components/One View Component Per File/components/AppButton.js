export default {

    template: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded px-5 py-2 disabled:cursor-not-allowed" v-bind:disabled="processing">
    <slot />
    </button>`,
  data() {
    return {
      processing: true,
    };
  },
}