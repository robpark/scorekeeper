require 'uri'
require 'net/http'
require 'openssl'

# https://developer.sportradar.com/docs/read/tennis/Tennis_v2#player-rankings
url = URI("https://api.sportradar.com/tennis-t2/en/players/rankings.xml?api_key={My API Key}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
