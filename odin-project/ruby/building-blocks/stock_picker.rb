def stock_picker(prices) # assumes chronological order
  best_price = 0 # assumes you can buy and sell the same day
  best_buy = best_sell = 0
  prices.map.with_index do |selling_price, selling_day|
    prices[0..selling_day].each.with_index do |buying_price, buying_day|
      profit = selling_price - buying_price
      if profit > best_price
        best_price = profit
        best_buy = buying_day
        best_sell = selling_day
      end
    end
  end

  [best_buy, best_sell]
end