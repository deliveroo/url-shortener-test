require 'rails_helper'

RSpec.describe UrlsController do
  describe '#index' do
    subject! { get :index }

    it 'does something' do

    end
  end

  describe '#create' do
    let(:url) { 'https://google.com' }

    subject! { post :create, params: { url: url }}

    it 'does something' do

    end
  end
end
