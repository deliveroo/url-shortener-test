require 'rails_helper'

describe Url do
  let(:url_to_shorten) { "http://google.com" }

  it "correctly sets the Redis key" do
    result = Url.create(url_to_shorten)

    expect(Url.for_shortened(result)).to eq url_to_shorten
  end
end
