function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let result = "";
            result += `Post: ${this.title}\n`;
            result += `Content: ${this.content}`;
            return result;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            return this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + "\n";
            result += `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n`;

                for (let com of this.comments) {
                    result += ` * ${com}\n`
                }

            }
            return result.trim();
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let result = super.toString() + "\n";
            result += `Views: ${this.views}`;
            return result.trim();
        }

    }
    return {Post, SocialMediaPost, BlogPost};
}
