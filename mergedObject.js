const results = await Promise.all(resultingPromises);
const channelName = getChannelName(channel);
const maxNumber = arr => Math.max(...arr);