import Vue from 'vue'

export default {
  data() {
    return {
      loadScripts: false,
    }
  },
  filters: {
    
  },
  mounted() {
   
  },
  methods: {
    async share(title = '', text = '') {
      const shareData = {
        title,
        text,
        url: window.location.href
      };
      try {
        await navigator.share(shareData);
      } catch (err) {
        const el = document.createElement("textarea");
        // Set value (string to be copied)
        el.value = shareData.url;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute("readonly", "");
        el.style = { position: "absolute", left: "-9999px" };
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand("copy");
        // Remove temporary element
        document.body.removeChild(el);
        this.$toast.show("لینک صفحه کپی شد.");
      }
    },
    setDelay(x = 500, f = () => {}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          f()
        }, x);
      })
    },
    $findBgColor(hexcolor) {
      if (hexcolor.length === 4) hexcolor = `${hexcolor}${hexcolor}${hexcolor}`
      hexcolor = hexcolor.replace('#', '')
      const r = parseInt(hexcolor.substr(0, 2), 16)
      const g = parseInt(hexcolor.substr(2, 2), 16)
      const b = parseInt(hexcolor.substr(4, 2), 16)
      const yiq = (r * 299 + g * 587 + b * 114) / 1000
      return yiq >= 114 ? 'black' : 'white'
    },
    fixNumbers(str) {
      const persianNumbers = [
          /۰/g,
          /۱/g,
          /۲/g,
          /۳/g,
          /۴/g,
          /۵/g,
          /۶/g,
          /۷/g,
          /۸/g,
          /۹/g,
        ]
      const arabicNumbers = [
          /٠/g,
          /١/g,
          /٢/g,
          /٣/g,
          /٤/g,
          /٥/g,
          /٦/g,
          /٧/g,
          /٨/g,
          /٩/g,
        ];
      if (typeof str === "string") {
        for (let i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    },
  },
  computed: {
    userFullName() {
      return this.$auth.loggedIn ? this.$auth.user.firstName + ' ' + this.$auth.user.lastName : ''
    },
    userPhoneNumber() {
      return this.$auth.loggedIn ? this.$auth.user.phoneNumber : ''

    },
    mq_xs() {
      return this.$mq === 'xs';
    },

    mq_gt_xs() {
      return this.$mq !== 'xs';
    },

    mq_sm() {
      return this.$mq === 'sm';
    },

    mq_lt_sm() {
      return this.$mq === 'xs';
    },

    mq_lte_sm() {
      return ['xs', 'sm'].includes(this.$mq);
    },

    mq_gt_sm() {
      return ['md', 'lg', 'xl'].includes(this.$mq);
    },

    mq_gte_sm() {
      return ['sm', 'md', 'lg', 'xl'].includes(this.$mq);
    },

    mq_md() {
      return this.$mq === 'md';
    },

    mq_lt_md() {
      return ['xs', 'sm'].includes(this.$mq);
    },

    mq_lte_md() {
      return ['xs', 'sm', 'md'].includes(this.$mq);
    },

    mq_gt_md() {
      return ['lg', 'xl'].includes(this.$mq);
    },

    mq_gte_md() {
      return ['md', 'lg', 'xl'].includes(this.$mq);
    },

    mq_lg() {
      return this.$mq === 'lg';
    },

    mq_lt_lg() {
      return ['xs', 'sm', 'md'].includes(this.$mq);
    },

    mq_lte_lg() {
      return ['xs', 'sm', 'md', 'lg'].includes(this.$mq);
    },

    mq_gt_lg() {
      return this.$mq === 'xl';
    },

    mq_gte_lg() {
      return ['lg', 'xl'].includes(this.$mq);
    },

    mq_xl() {
      return this.$mq === 'xl';
    },

    mq_lt_xl() {
      return this.$mq !== 'xl';
    },
  },
}
