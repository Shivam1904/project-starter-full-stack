import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { useChat } from './ChatContext';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AiChat() {
  const { messages, isLoading, sendMessage } = useChat();
  const { skin } = useUiSkin();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const content = input;
    setInput('');
    await sendMessage(content);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full gap-4">
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6 pb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                'flex gap-3',
                msg.role === 'user' ? 'ml-auto flex-row-reverse max-w-[85%]' : 'mr-auto w-full'
              )}
            >
              <div
                className={cn(
                  'h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow-sm mt-1',
                  msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-transparent border-0',
                  skin === 'glass' && msg.role === 'user' && 'glass-panel border-white/10',
                  skin === 'bubble' && 'rounded-full',
                  skin === 'comic' && msg.role === 'user' && 'border-2 border-foreground'
                )}
              >
                {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
              </div>
              <div
                className={cn(
                  'text-sm leading-relaxed',
                  msg.role === 'user'
                    ? cn(
                        'p-3 rounded-2xl rounded-tr-none bg-primary/10 text-foreground border border-primary/20 shadow-sm',
                        skin === 'glass' && 'glass-panel glass-highlight',
                        skin === 'bubble' && 'rounded-[1.5rem]',
                        skin === 'comic' && 'border-2 border-foreground bg-white text-black'
                      )
                    : 'bg-transparent border-0 shadow-none px-0 py-1 flex-1'
                )}
              >
                {msg.role === 'assistant' ? (
                  <div className="space-y-3">
                    {(() => {
                      const thoughtMatch = msg.content.match(/<thought>([\s\S]*?)<\/thought>/);
                      if (thoughtMatch) {
                        const thought = thoughtMatch[1].trim();
                        const content = msg.content.replace(/<thought>[\s\S]*?<\/thought>/, '').trim();
                        return (
                          <>
                            <div className={cn(
                                "text-xs italic text-muted-foreground/60 border-l-2 border-primary/20 pl-3 py-1 bg-muted/5 rounded-r-md transition-all hover:text-muted-foreground/80",
                                skin === 'glass' && "bg-white/5 border-white/10",
                                skin === 'comic' && "border-primary opacity-70"
                            )}>
                              <div className="font-bold uppercase tracking-widest text-[10px] mb-1 opacity-50 flex items-center gap-1">
                                <span className="h-1 w-1 rounded-full bg-primary/40" />
                                Thinking Process
                              </div>
                              {thought}
                            </div>
                            {content && (
                              <div className="animate-in fade-in duration-700">
                                {content}
                              </div>
                            )}
                          </>
                        );
                      }
                      return msg.content;
                    })()}
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 mr-auto w-full animate-in fade-in slide-in-from-bottom-2">
              <div className="h-8 w-8 rounded-full bg-transparent flex items-center justify-center shrink-0 mt-1">
                <Bot className="h-4 w-4 animate-pulse text-primary" />
              </div>
              <div className="flex items-center gap-2 px-0 py-1">
                <Loader2 className="h-3 w-3 animate-spin opacity-40 text-primary" />
                <span className="text-xs font-medium opacity-40 italic">AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Input
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className={cn(
            'flex-1',
            skin === 'glass' && 'glass-panel glass-highlight border-white/20 focus-visible:ring-primary/40',
            skin === 'bubble' && 'rounded-full px-5',
            skin === 'comic' && 'border-2 border-foreground bg-white rounded-none italic'
          )}
        />
        <Button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          size="icon"
          className={cn(
            'shrink-0 h-10 w-10',
            skin === 'bubble' && 'rounded-full',
            skin === 'comic' && 'border-2 border-foreground rounded-none shadow-[2px_2px_0_black]'
          )}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
