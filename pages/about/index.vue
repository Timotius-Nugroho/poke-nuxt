<template>
  <div class="text-blue-600 mt-32">
    ABOUTT
    <div>{{ users }}</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers: function () {
      this.$axios
        .post('/', {
          query: `query GetPayload($limit: Int, $offset: Int) {
                  payloads(limit: $limit, offset: $offset) {
                    id
                    orbit
                    payload_type
                  }
                }`,
          variables: {
            limit: 3,
            offset: 0,
          },
        })
        .then((res) => {
          console.log(res.data.data.payloads)
          this.users = res.data.data.payloads
        })
        .catch((err) => {
          console.warn(err)
        })
    },
  },
}
</script>
