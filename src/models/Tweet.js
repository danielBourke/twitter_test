module.exports = class Tweet   {
    constructor(t) {
      this.id = t.id;
      this.text = t.text,
      this.user_screen_name = t.user.screen_name,
      this.user_image = t.user.profile_image_url,
      this.date = t.created_at,
      this.likes = t.favorite_count,
      this.retweet_count = t.retweet_count
    }
}
