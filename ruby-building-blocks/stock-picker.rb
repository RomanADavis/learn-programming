def stock_picker(prices)
  best_profit = 0

  prices.each.with_index do |sell_price, sell_day|

    preceding_days = prices[0..sell_day]
    profits = preceding_days.map {|buy_price| sell_price - buy_price}

    profits.each.with_index do |profit, buy_day|
      if profit > best_profit
        best_profit = profit
        best_days = [buy_day, sell_day]
      end
    end

  end
  best_days
end

p stock_picker([17,3,6,9,15,8,6,1,10])
