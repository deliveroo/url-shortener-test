class UrlsController < ApplicationController
  def index
    render json: Url.all
  end

  def create
    if url.blank?
      render json: { error: :blank_url}, status: 400
      return
    end

    unique_id = Url.create(url)
    render json: unique_id
  end

  def show
    url = params[:id]

    long_url = Url.for_shortened(url)
    if long_url
      redirect_to long_url, status: 301
    else
      render json: { error: :invalid_url }, status: 400
    end
  end

  private

  def url
    params[:url]
  end
end
