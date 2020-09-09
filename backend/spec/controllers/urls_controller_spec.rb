require 'rails_helper'

RSpec.describe UrlsController do
  describe '#index' do
    subject { get :index }

    before do
      subject
    end

    it 'does something' do

    end
  end

  describe '#create' do
    let(:url) { 'https://google.com' }

    subject { post :create, params: { url: url }}

    before do
      subject
    end

    it 'does something' do

    end
  end
end
