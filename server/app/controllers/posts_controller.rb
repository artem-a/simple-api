class PostsController < ApplicationController

  def index
    load_posts
    respond_with_success @posts
  end

  def create
    build_post
    save_post or respond_with_errors @post
  end

  def show
    load_post
    authorize @post

    respond_with_success @post
  end

  private

  def post_params
    jsonapi_params only: %i[title body tags labels]
  end

  def load_posts
    @posts ||= policy_scope(current_user.posts.limit(params[:limit]))
  end

  def load_post
    @post ||= Post.find(params[:id])
  end

  def build_post
    @post ||= current_user.posts.new
    @post.assign_attributes(post_params)
  end

  def save_post
    if @post.save
      respond_with_success @post
    end
  end

end
