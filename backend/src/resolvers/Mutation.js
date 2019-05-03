const mutations = {
  async createTopic(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const topic = await ctx.db.mutation.createTopic(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return topic;
  },
};

module.exports = mutations;
